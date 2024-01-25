'use client'

import React, { useState } from 'react';
import sass from '@/styles/layout/content.template.module.scss';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  SearchOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

function HeaderLayout(){

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <header>
        <div className={sass.layout_menu_toggle}>
          <MenuOutlined />
        </div>
        <div className={sass.header_search_area} >
          <SearchOutlined height={55} />
        </div>

        <div className={sass.header_right_area}>
            <QuestionCircleOutlined />
        </div>
          
      </header>
     
    </>
  )
}
 
export default HeaderLayout;
