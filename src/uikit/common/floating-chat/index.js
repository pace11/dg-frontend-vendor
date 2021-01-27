import React, { useState } from 'react'
import OnOutsiceClick from 'react-outclick'
import styled from 'styled-components'
import InputSearch from '../../components/input_search'
import { Button } from '../../components/button'
import Theme from '../../common/theme'
import ListChat from '../../components/list_chat'
import Chat from '../../../assets/icons/Chat'
import Arrow from '../../../assets/icons/Arrow2'
import Filter from '../../../assets/icons/Filter'
import Setting from '../../../assets/icons/Setting2'
import Trash from '../../../assets/icons/Trash'

const ArrowIcon = styled(Arrow)`
  transform: rotate(180deg);
`

const FilterIcon = styled(Filter)`
  margin-right: 0px !important;
`

const SettingIcon = styled(Setting)`
  margin-right: 0px !important;
`

const TrashIcon = styled(Trash)`
  margin-right: 0px !important;
`

const ChatIcon = styled(Chat)`
  fill: ${Theme.colors.orange};
  stroke: ${Theme.colors.orange};
`

const Container = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  background: transparent;
`

const MiniChat = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 5px;
  width: auto;
  height: 43px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0px 10px 10px;
  div {
    margin: 0 10px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      margin: 0;
      color: ${Theme.colors.orange};
    }
  }
  cursor: pointer;
  user-select: none;
`

const MaxiChat = styled.div`
  width: 580px;
  height: 510px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 5px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 50px;
  overflow: hidden;
  border-bottom: 1px solid ${Theme.colors.gray5};
  cursor: pointer;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-gap: 5px;
  height: 460px;
`

const ColSearchFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100px;
  div {
    padding: 2px;
  }
`

const ColListChat = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 360px;
`

const StyledNotif = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${Theme.colors.orange};
  color: #fff;
  border-radius: 50%;
  text-align: center;
`

export default function FLoatingChat() {
  const [show, setShow] = useState(false)
  return (
    <Container>
      {!show && (
        <MiniChat onClick={() => setShow(!show)}>
          <div>
            <ChatIcon />
          </div>
          <div>
            <p>Chat</p>
          </div>
          <div>
            <StyledNotif>10</StyledNotif>
          </div>
        </MiniChat>
      )}
      {show && (
        <OnOutsiceClick onOutsideClick={() => setShow(false)}>
          <MaxiChat>
            <Header onClick={() => setShow(!show)}>
              <p>Chat</p>
              <ArrowIcon />
            </Header>
            <Content>
              <div>
                <ColSearchFilter>
                  <div>
                    <InputSearch placeholder="cari chat ..." />
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3,1fr)',
                      gridGap: '10px',
                    }}
                  >
                    <Button
                      variant="secondary-outline"
                      size="small"
                      block
                    >
                      <FilterIcon />
                    </Button>
                    <Button
                      variant="secondary-outline"
                      size="small"
                      block
                    >
                      <TrashIcon />
                    </Button>
                    <Button
                      variant="secondary-outline"
                      size="small"
                      block
                    >
                      <SettingIcon />
                    </Button>
                  </div>
                </ColSearchFilter>
                <ColListChat>
                  <ListChat />
                </ColListChat>
              </div>
              <div>belum ada isinya ...</div>
            </Content>
          </MaxiChat>
        </OnOutsiceClick>
      )}
    </Container>
  )
}
