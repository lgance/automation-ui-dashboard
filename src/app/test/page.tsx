'use client'

import { useState } from "react"
import { Button, Flex } from 'antd';

export default function Home() {


  const [state,setState] = useState();
  return (
    <>
        <Button type="dashed">Dashed Button</Button>
        <Button type="primary">Primary Button</Button>
        

        <div> TETPPAP  Home</div>
    </>
  )
}
