
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link'

export default function AppLayout({ children }) {
  return (
    <>
      <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" ><Link href="/">Home</Link></Menu.Item>
        <Menu.Item key="2" ><Link href="/static">Static</Link></Menu.Item>
        <Menu.Item key="3" ><Link href="/dynamic">Dynamic</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Menu System</Footer>
  </Layout>
    </>
  )
}
