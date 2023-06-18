import { color } from '@/style/mixins';
import styled from 'styled-components';
import { mediaBreakpointDown } from '@/style/mixins';
import Image from '@/components/common/Image/Image';

export const Container = styled.div`
    width: 100%;
    height: 1527px;

    overflow: hidden;

    ${mediaBreakpointDown('fhd')} {
        width: 1440px;
        height: 1100px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 1280px;
        height: 900px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 766px;
        height: 750px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 375px;
        height: 500px;
    }
`;

export const ContainerRectangle = styled.div`
    width: 1600px;
    margin: 160px;
    text-align: center;
    display: flex;

    ${mediaBreakpointDown('fhd')} {
        margin: 100px 120px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin: 80px 100px;
    }

    ${mediaBreakpointDown('xl')} {
        margin: 130px 40px;
    }

    ${mediaBreakpointDown('sm')} {
        margin: 80px 20px;
    }
`;

export const PageSecondRectangle = styled.div`
    width: 1600px;
    height: 1017px;
    position: absolute;
    z-index: -1;

    border-radius: 40px;
    background: linear-gradient(108.19deg, #8a56f3 3.38%, #7159fa 96.82%);

    ${mediaBreakpointDown('fhd')} {
        width: 1200px;
        height: 755px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 1066px;
        height: 671px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 690px;
        height: 560px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 335px;
        height: 380px;
    }
`;

export const RectangleText = styled.div`
    position: absolute;

    font-weight: 500;
    font-size: 60px;
    line-height: 120%;
    text-align: center;
    color: ${color('white')};

    width: 900px;
    height: 222px;

    margin: 400px 370px 400px 330px;

    span {
        font-weight: 700;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;

        width: 720px;
        height: 222px;

        margin: 284px 240px 240px 240px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;

        width: 590px;
        height: 222px;

        margin: 284px 240px 240px 240px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 40px;

        width: 470px;
        height: 140px;

        margin: 210px 110px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 28px;

        width: 240px;
        height: 170px;

        margin: 105px 45px;
    }
`;

export const PageSecondOneChess = styled(Image)`
    position: absolute;
    width: 1116px;
    height: 1212px;

    ${mediaBreakpointDown('fhd')} {
        width: 843px;
        height: 915px;

        margin-left: 90.21px;
        margin-top: -40.46px;
        transform: rotate(-12.27deg);
    }

    ${mediaBreakpointDown('xxl')} {
        width: 749.33px;
        height: 813.33px;

        margin-left: 65.21px;
        margin-top: -40.46px;
        transform: rotate(-12.27deg);
    }

    ${mediaBreakpointDown('xl')} {
        width: 543px;
        height: 589px;

        margin-left: 40.21px;
        margin-top: -10.46px;
        transform: rotate(-12.27deg);
    }

    ${mediaBreakpointDown('sm')} {
        width: 329px;
        height: 436px;

        margin-left: 25.21px;
        margin-top: 15.46px;
        transform: rotate(0deg);
    }

    /* transform: rotate(20.27deg); */
`;

export const PageSecondTwoChess = styled(Image)`
    position: absolute;
    overflow: hidden;
    width: 1037px;
    height: 1212px;
    margin-left: 880px;
    margin-top: 120px;

    ${mediaBreakpointDown('fhd')} {
        width: 783px;
        height: 915px;

        margin-left: 650px;
        margin-top: 100px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 696px;
        height: 813.33px;

        margin-left: 560px;
        margin-top: 100px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 475.81px;
        height: 553.7px;

        margin-left: 292px;
        margin-top: 270px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 319.68px;
        height: 372.68px;

        margin-left: 55px;
        margin-top: 170px;

        transform: rotate(0deg);
    }

    /* transform: rotate(20.27deg); */
`;
