import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import productStyle from './productStyle';

const Product = ({ product, onAddToCart }) => {
    
    const classes = productStyle();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton arial-label="Add to Cart">
                            <AddShoppingCart onClick={() => onAddToCart(product.id, 1)}/>
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>

        </Card>
    )
}

export default Product
