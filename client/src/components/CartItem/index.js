import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
// import { IoTrashSharp } from "react-icons/io5";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { IconButton, Input } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Grid item xs={6}>
      {/* <Paper className={classes.paper} style={{ height: "100%" }}>
        <Box className="cart-image">
          <img
            src={`/images/${item.image}`}
            alt={item.image}
            style={{ maxHeight: "190px" }}
          />
          <Typography style={{ width: "100%" }}>{item.name}</Typography>
          <Typography>${item.price}</Typography>
        </Box>
        <Box style={{ height: "100%" }}>
          <Box style={{ display: "flex" }}>
            <Input
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={onChange}
              color="secondary"
            />
            <IconButton aria-label="trash" onClick={() => removeFromCart(item)}>
              <DeleteForeverIcon fontSize="small" style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Paper> */}
      <Card elevation={6}>
        <CardHeader
          title={item.name}
          align="center"
          titleTypographyProps={{ noWrap: true, variant: "subtitle1" }}
        />

        {/* <Typography noWrap="true" align="center" variant="h5">
          {item.name}
        </Typography> */}
        <CardMedia
          component="img"
          image={`/images/${item.image}`}
          title={item.name}
          alt={item.name}
          height="140"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            align="center"
          >
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <Box>
            <Box style={{ display: "flex" }}>
              <Input
                type="number"
                placeholder="1"
                value={item.purchaseQuantity}
                onChange={onChange}
                color="secondary"
              />
              <IconButton
                aria-label="trash"
                onClick={() => removeFromCart(item)}
              >
                <DeleteForeverIcon
                  fontSize="small"
                  // style={{ color: "white" }}
                />
              </IconButton>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartItem;
