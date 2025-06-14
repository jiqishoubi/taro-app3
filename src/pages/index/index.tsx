import useAppSelector from '@/store/hooks/useAppdSelector'
import { actions_counter } from '@/store/reducers/counter'
import { Button, View, Text } from '@tarojs/components'
import React from 'react'
import { useDispatch } from 'react-redux'
import './index.less'
import styles from './index.module.less'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useAppSelector((state) => state.counter)

  const handleAdd = () => {
    dispatch(actions_counter.add(2))
  }
  const handleDec = () => {
    dispatch(actions_counter.minus())
  }
  const handleAsyncAdd = () => {
    dispatch(actions_counter.asyncAdd())
  }

  return (
    <>
      <View className="index">
        <Button className="add_btn" onClick={handleAdd}>
          +
        </Button>
        <Button className="dec_btn" onClick={handleDec}>
          -
        </Button>
        <Button className="dec_btn" onClick={handleAsyncAdd}>
          async
        </Button>
        <View>
          <Text>{counter.num}</Text>
        </View>
        <View>
          <Text className={styles.red}>Hello, World</Text>
        </View>
      </View>
    </>
  )
}

export default Index
