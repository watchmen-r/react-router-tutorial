import { useLocation, useParams } from "react-router"

const Post = ({match}) => {

  // URLのpostの後ろをパラメータとして取得できる
  const {id} = useParams();

  // 例えば下記returnにてgetパラメータの?first=xxx&last=xxx
  // の内容を取得できる
  const query = new URLSearchParams(useLocation().search);

  return (
    <>
      <h1>Id is = {id}</h1>
      <h1>{query.get("first")}</h1>
      <h1>{query.get("last")}</h1>
    </>
  )
}

export default Post