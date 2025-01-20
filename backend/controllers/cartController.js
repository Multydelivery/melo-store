import userModel from "../models/userModel.js";


// add products to user cart
const addToCart = async (req, res) => {
    try {

        const { userId, itemId, size } = req.body;

        const userData = await userModel.findById(userId);  // find user by id
        let cartData = await userData.cartData;  // get user cart data

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });  // update user cart data

        res.json({ success: true, message: 'Item added to cart' });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }

}


// update user cart 
const updateCart = async (req, res) => {
    try {

        const { userId, itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);  // find user by id
        let cartData = await userData.cartData;  // get user cart data

        cartData[itemId][size] = quantity;  // update quantity of item in cart

        await userModel.findByIdAndUpdate(userId, { cartData });  // update user cart data
        res.json({ success: true, message: 'Cart updated' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }

}

    // get user cart data
    const getUserCart = async (req, res) => {

        try {
            const { userId } = req.body;

            const userData = await userModel.findById(userId);  // find user by id
            let cartData = await userData.cartData;  // get user cart data

            res.json({ success: true, cartData});
        } catch (error) {
            console.error(error);
            res.json({ success: false, message: error.message });
    }

}


    export { addToCart, updateCart, getUserCart }
