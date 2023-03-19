import React from 'react'
import { styles } from './style'
import ModalNav from '../shared/ModalNav/ModalNav';
import { SharedStyles } from '../shared/SharedStyle';
 
const SignMessagePopup = (props: any) => {
  const data = 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. '
  return (
    <styles.Wrapper>
        <ModalNav title="Signature Request" showIcon={true} />
        <styles.ContentWrap>
            <styles.TextWrap>
                <styles.Subtitle>Message:</styles.Subtitle>
                <styles.Desc>
                    {data}
                </styles.Desc>
            </styles.TextWrap>
            <styles.ButtonWrap>
                <SharedStyles.Divider />
                <SharedStyles.PrimaryButton onClick={()=>{}}>
                    Sign
                </SharedStyles.PrimaryButton>
                <SharedStyles.SecondaryButton onClick={()=>{props.changeVisibility(false)}}>
                    Cancel
                </SharedStyles.SecondaryButton>
            </styles.ButtonWrap>
        </styles.ContentWrap>
    </styles.Wrapper>
  )
}

export default SignMessagePopup;