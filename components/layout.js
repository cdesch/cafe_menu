import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link';

export default function AppLayout({ children }) {
  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="/">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/static">
              <Link href="/static">Static</Link>
            </Menu.Item>
            <Menu.Item key="/dynamic">
              <Link href="/dynamic">Dynamic</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Menu</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Menu System</Footer>
      </Layout>
    </>
  );
}
