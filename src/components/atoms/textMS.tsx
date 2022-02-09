import React from "react";
import { ColorMS, ColorMSAttributes } from "../../design_system/colorMS";
import { TypoMS, TypoMSAttributes } from "../../design_system/typoMS";
import styled from '@emotion/styled'



export interface TextMSProps{
    textTypo?: TypoMSAttributes;
    textColor?: ColorMSAttributes;
}

const TextStyle = ({textTypo,textColor}: TextMSProps)=>{
    return {
        fontSize : textTypo?.fontSize,
        fontWeight : textTypo?.fontWeight,
        color: textColor,
        fontFamily : 'Noto Sans KR',
    };
};

export const TextMS = styled.p(
    ({
      textTypo = TypoMS.Body,
      textColor = ColorMS.Text.Body
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Heading1 = styled.h1(
    ({
      textTypo = TypoMS.Heading1,
      textColor = ColorMS.Text.Heading,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Heading2 = styled.h2(
    ({
      textTypo = TypoMS.Heading2,
      textColor = ColorMS.Text.Heading,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Heading3 = styled.h3(
    ({
      textTypo = TypoMS.Heading3,
      textColor = ColorMS.Text.Heading,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Heading4 = styled.h4(
    ({
      textTypo = TypoMS.Heading4,
      textColor = ColorMS.Text.Heading,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Heading5 = styled.h5(
    ({
      textTypo = TypoMS.Heading5,
      textColor = ColorMS.Text.Heading,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Heading6 = styled.h6(
    ({
      textTypo = TypoMS.Heading6,
      textColor = ColorMS.Text.Heading,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const Body = styled.p(
    ({ 
      textTypo = TypoMS.Body,
      textColor = ColorMS.Text.Body,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const SmallBody = styled.p(
    ({
      textTypo = TypoMS.Body,
      textColor = ColorMS.Text.Body,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );
  
  export const ExtraSmallBody = styled.p(
    ({
      textTypo = TypoMS.Body,
      textColor = ColorMS.Text.Body,
    }: TextMSProps) => TextStyle({ textTypo, textColor })
  );