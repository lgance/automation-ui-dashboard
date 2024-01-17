'use client'

import React, { useState } from 'react';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

function HeaderLayout(){

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <header>
          <Button type="primary" onClick={toggleCollapsed} >
            {collapsed ? <MenuOutlined /> : <MenuOutlined /> }
          </Button>
        <div>

        </div>
            <div>headerLayout</div>
            <div>test</div>
            https://demos.pixinvent.com/vuexy-html-admin-template/html/vertical-menu-template-semi-dark/app-ecommerce-dashboard.html
      </header>
     
    </>
  )
}
 
export default HeaderLayout;
