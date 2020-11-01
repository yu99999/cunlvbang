import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {changeLoading} from "@/layouts/store/action"

export const useAxios = (target, initialValue = {}, paramData, dependencies) => {
  const [res, setRes] = useState(initialValue);
  const [err, setErr] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeLoading(true));
    target(paramData).then(res => {
      setRes(res.data)
    }).catch(err => {
      setErr(err)
    }).finally(() => {
      dispatch(changeLoading(false));
    })

    // eslint-disable-next-line
  }, dependencies || [])

  return [res, err]
}
