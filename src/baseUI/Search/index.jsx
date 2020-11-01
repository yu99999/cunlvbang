import React, {useState} from "react"
import styled from "styled-components"
import style from "@/assets/global-style"

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${style["border-color"]};
  border-radius: 4rem;
  margin-top: 10rem;

  input{
    border: none;
    flex: 1;
    padding: 0 15rem;
    outline: none;
  }

  .icon{
    width: 42rem;
    height: 30rem;
    line-height: 30rem;
    text-align: center;
    border-left: 1px solid ${style["border-color"]};
    background-color: #F5F7FA;

    .iconfont{
      font-size: 17rem;
    }
  }
`

const Search = (props) => {
  const [input, setInput] = useState("");

  const {onSearch} = props;

  return (
    <SearchWrapper>
      <input type="text" value={input} placeholder="请输入团队ID" onChange={(e) => setInput(e.target.value)} />
      <div className="icon" onClick={() => onSearch(input)}>
        <span className="iconfont">&#xe62c;</span>
      </div>
    </SearchWrapper>
  )
}

export default React.memo(Search);