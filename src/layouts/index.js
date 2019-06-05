import styles from './index.css';

/**
 * 约定 src/layouts/index.js 为全局路由，返回一个 React 组件，通过 props.children 渲染子组件。
 * 
 * 你可能需要针对不同路由输出不同的全局 layout，umi 不支持这样的配置，但你仍可以在 layouts/index.js 对 location.path 做区分，渲染不同的 layout 。我们这样做。
 * props.location.pathname === '/login'
 */

function BasicLayout(props) {
  console.log(props)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
