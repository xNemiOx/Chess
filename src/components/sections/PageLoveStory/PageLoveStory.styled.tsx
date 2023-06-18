import styled from 'styled-components';
import { mediaBreakpointDown } from '@/style/mixins';
import { color } from '@/style/mixins';
import Image from '@/components/common/Image/Image';

export const Container = styled.div`
    z-index: 1000;

    width: 100%;
    height: 786px;

    ${mediaBreakpointDown('fhd')} {
        height: 590px;
    }

    ${mediaBreakpointDown('xxl')} {
        height: 520px;
    }

    ${mediaBreakpointDown('xl')} {
        height: 441px;
    }
`;

export const PageLoveStoryContainer = styled.div`
    height: 100%;
    padding: 180px 160px;

    display: flex;
    justify-content: space-between;

    ${mediaBreakpointDown('fhd')} {
        padding: 135px 120px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 120px 160px 120px 100px;
    }

    ${mediaBreakpointDown('xl')} {
        padding: 113px 41px 157px 64px;
    }
`;

export const PageLoveStoryContainerVideo = styled.div`
    height: 100%;
    width: 40%;

    &:hover {
        .LoveStoryIcon {
            width: 198.22px;
            height: 138.15px;
        }
    }
`;

export const PageLoveStoryContainerText = styled.div`
    height: 100%;
    width: 50%;
    padding-right: 80px;

    ${mediaBreakpointDown('fhd')} {
        padding-right: 0px;
    }
`;

export const PageLoveStoryImage = styled(Image)`
    width: 100%;
    height: 100%;

    border-radius: 40px;
    z-index: -1;
`;
export const PageLoveStoryImageBlock = styled.div`
    width: 100%;
    height: 100%;

    margin-top: -430px;

    background: linear-gradient(180.49deg, rgba(127, 75, 231, 0) 12.22%, #7f4be7 108.54%);
    opacity: 0.85;
    border-radius: 40px;

    ${mediaBreakpointDown('fhd')} {
        margin-top: -323px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-top: -283px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-top: -175px;
    }
`;

export const LoveStoryIcon = styled(Image)`
    width: 99.22px;
    height: 69.15px;
    position: absolute;
    margin-top: -250px;
    margin-left: 270px;

    z-index: 1;

    cursor: pointer;

    ${mediaBreakpointDown('fhd')} {
        margin-top: -200px;
        margin-left: 200px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-top: -180px;
        margin-left: 160px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-top: -120px;
        margin-left: 90px;
    }
`;

export const PageLoveStoryTitle = styled.div`
    font-size: 60px;
    padding: 88px 0 28px 0;

    font-style: normal;
    line-height: 120%;

    span {
        color: ${color('purpl')};
        font-weight: 700;
        display: block;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;
        padding: 70px 0 26px 0;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 40px;
        padding: 0px 0 26px 0;
        margin-top: -25px;
    }
`;

export const PageLoveStoryText = styled.div`
    font-size: 20px;

    font-style: normal;
    font-weight: 500;
    line-height: 160%;

    letter-spacing: 0.02em;

    opacity: 0.8;

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
    }
`;
