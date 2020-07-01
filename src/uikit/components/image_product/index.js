import React, { useRef } from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: auto;
  height: auto;
`

const RowImage = styled.div`
  width: 180px;
  min-height: 146px;
  background-image: url(${(props) =>
    props.imageUrl
      ? props.imageUrl
      : `https://res.cloudinary.com/code5/image/upload/v1593579103/dialogue/add-image_bg7ezp.png`});
  background-color: ${Theme.colors.white2};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.imageUrl ? `cover` : `auto`)};
  border: 1px solid ${Theme.colors.gray5};
  border-radius: 10px;
  cursor: pointer;
`

const RowImageMain = styled.div`
  width: 237px;
  min-height: 146px;
  background-image: url(${(props) =>
    props.imageUrl
      ? props.imageUrl
      : `https://res.cloudinary.com/code5/image/upload/v1593579103/dialogue/add-image_bg7ezp.png`});
  background-color: ${Theme.colors.white2};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.imageUrl ? `cover` : `auto`)};
  border: 1px solid ${Theme.colors.gray5};
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`

const TitleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 237px;
  height: 40px;
  background: ${Theme.colors.orange};
  border: 1px solid ${Theme.colors.orange};
  border-radius: 0 0 10px 10px;
  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }
`

/**
 *
 * @param {String} props.imageUrl
 * @param {Function} props.onChangeImage
 */
export const Image = ({ imageUrl, onChangeImage }) => {
  const imageFile = useRef(null)

  const HandleClick = () => {
    imageFile.current.click()
  }

  return (
    <Container>
      <RowImage imageUrl={imageUrl} onClick={HandleClick}>
        <input
          type="file"
          ref={imageFile}
          accept="image/*"
          onChange={onChangeImage}
          hidden
        />
      </RowImage>
    </Container>
  )
}

/**
 *
 * @param {String} props.imageUrl
 * @param {Function} props.onChangeImage
 */
export const ImageMain = ({ imageUrl, onChangeImage }) => {
  const imageFile = useRef(null)

  const HandleClick = () => {
    imageFile.current.click()
  }

  return (
    <Container>
      <RowImageMain imageUrl={imageUrl} onClick={HandleClick}>
        <input
          type="file"
          ref={imageFile}
          accept="image/*"
          onChange={onChangeImage}
          hidden
        />
      </RowImageMain>
      <TitleMain>
        <p>Foto Utama</p>
      </TitleMain>
    </Container>
  )
}
