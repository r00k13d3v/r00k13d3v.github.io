import { useState, useEffect } from 'react';
import { unified } from 'unified';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout, Menu } from 'antd';
import {
  FileOutlined,
  HomeOutlined,
} from '@ant-design/icons';
const { Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Posts', 'sub1', <FileOutlined />),
];

function App() {
  const [html, setHtml] = useState('');
  const fileName = 'test';

  useEffect(() => {
    // Fetching the Markdown file from the public folder
    fetch(`/posts/${fileName}.md`)
      .then((response) => response.text())
      .then((markdown) => {
        // Setting the Markdown file to state
        setHtml(markdown);
      })
      .catch((error) => console.error('Error fetching markdown file:', error));
  }, [fileName]);
  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider theme="light">
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: '0 50px', maxHeight: '100vh', overflow: 'auto' }}>
          <Markdown
            remarkPlugins={[remarkGfm]}
          >
            {html}
          </Markdown>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
