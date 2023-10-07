'use client'

import { useCartContext } from '@/Store/StoreContext';
import React from 'react'

const ItemsinCart = () => {
    const { FetchNoifItemsinCart } = useCartContext();
    FetchNoifItemsinCart();
}

export default ItemsinCart