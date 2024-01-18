'use client'

import React, { useState } from 'react';
import template from '@/styles/layout/content.template.module.scss';

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
        <div className={template.layout_menu_toggle}>
          <MenuOutlined />
        </div>


        
        <div className={template.layout_nav_right_area}>
          <div>headerLayout</div>
          https://demos.pixinvent.com/vuexy-html-admin-template/html/vertical-menu-template-semi-dark/app-ecommerce-dashboard.html
        </div>

      </header>
     
    </>
  )
}
 
export default HeaderLayout;
