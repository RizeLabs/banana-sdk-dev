import React from 'react'
import { styles } from './style'
import ModalNav from '../shared/ModalNav/ModalNav'
import { SharedStyles } from '../shared/SharedStyle'

const TxSign = () => {
  return (
    <styles.Wrapper>
      <ModalNav title='Confirm' showIcon={true} />
      <styles.ContentWrap>
        <styles.TextWrap>
          <styles.HeaderWrap>
            <styles.Header>1.597 ETH</styles.Header>
            <styles.SubHeader>$2,107.11 USD</styles.SubHeader>
          </styles.HeaderWrap>
          <SharedStyles.Divider />
          <styles.FieldWrapper>
            <styles.FieldName>From</styles.FieldName>
            <styles.FieldValue>AndrewAinsley (0x7131CA84df...gt8848f8E696)</styles.FieldValue>
            <styles.FieldName>To</styles.FieldName>
            <styles.FieldValue>(0x16dcc0ecdjfyh7sjjf8dkahd8gfae2bf7c61037)</styles.FieldValue>
          </styles.FieldWrapper>
          <SharedStyles.Divider />
          <styles.RowFlex>
            <styles.FieldRowName>Network Fee</styles.FieldRowName>
            <styles.FieldRowValue>0.02 ETH ($26.35 USD)</styles.FieldRowValue>
          </styles.RowFlex>
          <SharedStyles.Divider />
          <styles.RowFlex>
            <styles.FieldRowName>Max Total</styles.FieldRowName>
            <styles.FieldRowValue>1.617 ETH ($2,133.46 USD)</styles.FieldRowValue>
          </styles.RowFlex>
        </styles.TextWrap>
        <styles.ButtonWrap>
            <SharedStyles.Divider />
            <styles.ButtonDivWrap>
              <styles.ButtonDiv>
                <SharedStyles.PrimaryButton onClick={()=>{}}>
                  Confirm
                </SharedStyles.PrimaryButton>
              </styles.ButtonDiv>
              <styles.ButtonDiv>
                <SharedStyles.SecondaryButton onClick={()=>{}}>
                  Cancel
                </SharedStyles.SecondaryButton>
              </styles.ButtonDiv>
            </styles.ButtonDivWrap>
        </styles.ButtonWrap>
      </styles.ContentWrap>
    </styles.Wrapper>
  )
}

export default TxSign