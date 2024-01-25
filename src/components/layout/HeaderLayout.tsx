'use client'

import React, { useState } from 'react';
import template from '@/styles/layout/content.template.module.scss';

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
        <div className={template.layout_menu_toggle}>
          <MenuOutlined />
        </div>
        <div className={template.header_search_area} >
          <SearchOutlined height={55} />
        </div>

        <div className={template.header_right_area}>
            <QuestionCircleOutlined />
        </div>
          
      </header>
     
    </>
  )
}
 
export default HeaderLayout;
