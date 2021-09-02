import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import ProductList from "../ProductList";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  catOption: {
    backgroundColor: "#c82427",
    borderRadius: '30px 30px 30px 30px'
  },
  catOptionDetails: {
    backgroundColor: "#ffcd27",
  },
  catOptionTitle: {
    color: "#ffcd27",
    fontSize: "2em"
  },
}));

function CategoryMenu() {
  const classes = useStyles();

  const [state, dispatch] = useStoreContext();
  const [expanded, setExpanded] = React.useState(false);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  // <div>
  //     <h2>Choose a Category:</h2>
  //     {categories.map((item) => (
  //       <button
  //         key={item._id}
  //         onClick={() => {
  //           handleClick(item._id);
  //         }}
  //       >
  //         {item.name}
  //       </button>
  //     ))}
  //   </div>

  // <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  //       <AccordionSummary
  //         expandIcon={<ExpandMoreIcon />}
  //         aria-controls="panel1bh-content"
  //         id="panel1bh-header"
  //       >
  //         <Typography className={classes.heading}>General settings</Typography>
  //         <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
  //       </AccordionSummary>
  //       <AccordionDetails>
  //         <Typography>
  //           Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
  //           maximus est, id dignissim quam.
  //         </Typography>
  //       </AccordionDetails>
  //     </Accordion>

  // {categories.map((item) => (
  //   <Accordion key={item._id} className={classes.catOption} onClick={() => {
  //        handleClick(item._id);
  //      }}>
  //     <AccordionSummary
  //       expandIcon={<ExpandMoreIcon />}
  //       aria-controls="panel1a-content"
  //       id={item.name}
  //     >
  //       <Typography>{item.name}</Typography>
  //     </AccordionSummary>
  //     <AccordionDetails>
  //       <ProductList />
  //     </AccordionDetails>
  //   </Accordion>
  // ))}

  // {categories.map((item) => (
  //   <Accordion
  //     expanded={expanded === item.name}
  //     onChange={handleChange(item.name)}
  //     key={item._id}
  //     className={classes.catOption}
  //     onClick={() => {
  //       handleClick(item._id);
  //     }}
  //   >
  //     <AccordionSummary
  //       expandIcon={<ExpandMoreIcon />}
  //       aria-controls="panel1bh-content"
  //       id={item.name}
  //     >
  //       <Typography className={classes.catOptionTitle}>{item.name}</Typography>
  //     </AccordionSummary>
  //     <AccordionDetails className={classes.catOptionDetails}>
  //       <Typography>
  //         <ProductList />
  //       </Typography>
  //     </AccordionDetails>
  //   </Accordion>
  // ))}

  return (
    <div>
      <Typography align="center" variant="h3" style={{marginTop: "2rem"}}>Choose a Category:</Typography>
      <Container maxWidth="lg" style={{marginTop: "5rem"}}>
        {categories.map((item) => (
          <Accordion
            expanded={expanded === item.name}
            onChange={handleChange(item.name)}
            key={item._id}
            className={classes.catOption}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id={item.name}
            >
              <Typography className={classes.catOptionTitle}>
                {item.name}
              </Typography>
            </AccordionSummary>
              <AccordionDetails className={classes.catOptionDetails}>
                <Typography>
                  <ProductList />
                </Typography>
              </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}

export default CategoryMenu;
