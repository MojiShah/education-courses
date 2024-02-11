import React, { useState } from 'react'

export default function useCounter(initialval) {
    const [value, setValue] = useState(initialval);

    const addCount = () => setValue(prevCount => prevCount + 1);
    const minusCount = () => setValue(prevCount => prevCount - 1);

    return [value, addCount , minusCount]

}
