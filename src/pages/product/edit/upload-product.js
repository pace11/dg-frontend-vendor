import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../../uikit/common/theme'
import {
  ImageMain,
  Image,
} from '../../../uikit/components/image_product'
import { Button } from '../../../uikit/components/button'

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
`

const Row = styled.div`
  height: auto;
  ${(props) => props}
`

const Col = styled.div`
  height: auto;
  ${(props) => props}
`

const StyledText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  ${(props) => props}
`

export default function UploadProduct() {
  const [imageUrl, setImageUrl] = useState([
    {
      img_url: '',
    },
    {
      img_url: '',
    },
    {
      img_url: '',
    },
    {
      img_url: '',
    },
    {
      img_url: '',
    },
  ])

  const UpdateImage = (key, e) => {
    const file_reader = new FileReader(),
      file_image = e.target.files[0]

    if (file_image.size > 1000000) {
      alert('image file is too large > 10 Mb')
    } else {
      if (file_image && file_image.type.match('image.*')) {
        file_reader.readAsDataURL(file_image)
        file_reader.onloadend = () => {
          setImageUrl(
            imageUrl.map((item, i) =>
              i === key
                ? { ...item, img_url: file_reader.result }
                : item,
            ),
          )
        }
      }
    }
  }

  return (
    <Container>
      <Row padding="0 0 20px 0">
        <StyledText>Upload Produk</StyledText>
      </Row>
      <Row
        display="grid"
        gridTemplateColumns="3fr 2fr 2fr 2fr 2fr"
        gridGap="25px"
        padding="30px 0"
      >
        <ImageMain
          imageUrl={imageUrl && imageUrl[0].img_url}
          onChangeImage={(e) => UpdateImage(0, e)}
        />
        <Image
          imageUrl={imageUrl && imageUrl[1].img_url}
          onChangeImage={(e) => UpdateImage(1, e)}
        />
        <Image
          imageUrl={imageUrl && imageUrl[2].img_url}
          onChangeImage={(e) => UpdateImage(2, e)}
        />
        <Image
          imageUrl={imageUrl && imageUrl[3].img_url}
          onChangeImage={(e) => UpdateImage(3, e)}
        />
        <Image
          imageUrl={imageUrl && imageUrl[4].img_url}
          onChangeImage={(e) => UpdateImage(4, e)}
        />
      </Row>
      <Row
        borderTop={`1px solid ${Theme.colors.gray5}`}
        padding="20px"
      >
        <Col
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <div>
            <Button
              variant="primary-orange"
              onClick={() => alert('upload photo success')}
            >
              Upload Foto
            </Button>
          </div>
          <div>
            <StyledText
              fontSize="14px"
              fontWeight="300"
              margin="15px 0"
              color={Theme.colors.gray4}
            >
              Ukuran foto minimal 300x300px. Maksimum ukuran file 10
              MB. Format foto JPG, JPEG, PNG
            </StyledText>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
