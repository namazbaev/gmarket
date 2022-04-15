import styled, { css } from "styled-components";
import { ReactComponent as JumboImg } from 'assets/images/jumbo.svg';
import { ReactComponent as LemonImg } from 'assets/images/lemon.svg';
import { ReactComponent as ZespriImg } from 'assets/images/zespri.svg';
import { ReactComponent as AvocadoImg } from 'assets/images/avocado.svg';
import { ReactComponent as LargeAvocadoImg } from 'assets/images/large-avocado.svg';

const common = css`
    width: 130px;
    height: 130px;
    margin-top: 10px;
`
export const Jumbo = styled(JumboImg)`${common}`
export const Lemon = styled(LemonImg)`${common}`
export const Zespri = styled(ZespriImg)`${common}`
export const Avocado = styled(AvocadoImg)`${common}`
export const LargeAvocado = styled(LargeAvocadoImg)`${common}`