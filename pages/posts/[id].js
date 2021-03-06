import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/article.module.css';

export default function Post({ postData }) {
  return (
        <Layout>
            <p className={styles.title}>{postData.title}</p>
            <p className={styles.id}>{postData.id}</p>
            {postData.date}
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}