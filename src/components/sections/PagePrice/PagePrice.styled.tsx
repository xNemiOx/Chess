import styled from 'styled-components';
import { mediaBreakpointDown } from '@/style/mixins';
import { color } from '@/style/mixins';
import Image from '@/components/common/Image/Image';

export const Container = styled.div`
    z-index: 1000;

    width: 100%;
    height: 1166px;

    ${mediaBreakpointDown('fhd')} {
        height: 950px;
    }

    ${mediaBreakpointDown('xxl')} {
        height: 815px;
    }
`;

export const ContainerPagePrice = styled.div`
    width: 100%;
    height: 1166px;

    padding: 160px 80px 120px 80px;

    ${mediaBreakpointDown('fhd')} {
        padding: 120px 60px 120px 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 103px 53px 80px 53px;
        height: 815px;
    }
`;

export const ContainerPagePriceTitle = styled.div`
    width: 100%;
    height: 67px;

    padding-right: 960px;

    ${mediaBreakpointDown('xxl')} {
        height: 40px;
    }
`;

export const ContainerPagePricePacket = styled.div`
    width: 1920;
    height: 939px;

    padding-top: 80px;
    padding-bottom: 120px;

    display: flex;

    ${mediaBreakpointDown('fhd')} {
        padding-top: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding-top: 55px;
        height: 815px;
    }
`;

export const PricePacketStandart = styled.div`
    width: 560px;
    height: 739px;
    margin-right: 40px;

    border: 2.66667px solid ${color('grey')};
    border-radius: 40px;
    background-color: ${color('grey')};

    ${mediaBreakpointDown('fhd')} {
        width: 420px;
        height: 601px;
        margin-right: 30px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 374px;
        height: 533px;
        margin-right: 30px;
    }
`;

export const PricePacketPremium = styled.div`
    width: 560px;
    height: 739px;
    margin-right: 40px;

    background: ${color('purpl')};
    border-radius: 40px;

    ${mediaBreakpointDown('fhd')} {
        width: 420px;
        height: 601px;
        margin-right: 30px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 374px;
        height: 533px;
        margin-right: 30px;
    }
`;

export const PricePacketAnnualPremium = styled.div`
    width: 560px;
    height: 739px;

    border: 2.66667px solid ${color('grey')};
    border-radius: 40px;
    background: ${color('white')};

    ${mediaBreakpointDown('fhd')} {
        width: 420px;
        height: 601px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 374px;
        height: 533px;
        margin-right: 30px;
    }
`;

export const ContainerPriceCost = styled.div`
    width: 560px;
    height: 157px;
    display: flex;
    justify-content: space-between;

    padding: 0px 40px 77px 40px;

    ${mediaBreakpointDown('fhd')} {
        width: 415px;
        height: 120px;
        padding: 0px 30px 60px 30px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 365px;
        height: 120px;
        padding: 0px 27px 60px 30px;
    }
`;

export const ContainerPriceTitleText = styled.div`
    width: 560px;
    height: 42px;
    display: flex;
    justify-content: space-between;

    padding: 0px 40px 22px 40px;

    ${mediaBreakpointDown('fhd')} {
        padding: 0px 30px 22px 30px;
        width: 360px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 0px 30px 0px 30px;
        width: 360px;
        height: 15px;
    }
`;

export const ContainerPriceTextPoint = styled.ul`
    width: 560px;
    height: 395px;
    display: flex;
    justify-content: space-between;

    padding: 0px 30px 64px 40px;

    ${mediaBreakpointDown('fhd')} {
        padding: 0px 30px 22px 30px;
        width: 360px;
        height: 395px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 0px 30px 22px 30px;
        width: 360px;
        height: 280px;
    }
`;

export const ContainerPoint = styled.div`
    width: 10px;

    ${mediaBreakpointDown('fhd')} {
        width: 8px;
    }
`;

export const ContainerText = styled.div`
    width: 520px;
    height: 395px;

    padding: 0px 0px 64px 22px;

    ${mediaBreakpointDown('fhd')} {
        width: 520px;
        height: 250px;
    }
`;

export const PagePriceTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;

    color: ${color('black')};

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;
    }
`;

export const PricePacketTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;

    color: ${color('black')};

    padding: 32px 132px 67px 40px;

    ${mediaBreakpointDown('fhd')} {
        font-size: 30px;
        padding: 24px 132px 50px 30px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 30px;
        padding: 21px 102px 40px 27px;
    }
`;

export const PricePacketTitleActive = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;

    color: ${color('white')};

    padding: 32px 132px 67px 40px;

    ${mediaBreakpointDown('fhd')} {
        font-size: 30px;
        padding: 24px 132px 50px 30px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 30px;
        padding: 21px 132px 40px 27px;
    }
`;

export const StandartCost = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 78px;
    line-height: 100%;

    color: ${color('purpl')};

    ${mediaBreakpointDown('fhd')} {
        font-size: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 50px;
    }
`;

export const PremiumCost = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 78px;
    line-height: 100%;

    color: ${color('white')};

    ${mediaBreakpointDown('fhd')} {
        font-size: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 50px;
    }
`;

export const AnnPremiumCost = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 78px;
    line-height: 100%;

    color: ${color('black')};

    ${mediaBreakpointDown('fhd')} {
        font-size: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 50px;
    }
`;

export const ButtonsArrow = styled.a`
    svg {
        position: absolute;
        width: 18.67px;
        height: 16px;
    }
`;

export const ButtonsArrowBlack = styled.a`
    svg {
        position: absolute;
        width: 18.67px;
        height: 16px;

        border: 2px solid ${color('white')};
    }
`;

export const StandartButton = styled.button`
    width: 66.67px;
    height: 66.67px;
    margin-top: 10px;

    background: ${color('purpl')};
    border-radius: 50px;
    border: 2px solid;
    border-color: ${color('purpl')};

    transition: width 0.5s, border-color 0.3s;

    &:hover {
        width: 150px;
    }

    cursor: pointer;

    ${mediaBreakpointDown('fhd')} {
        width: 50px;
        height: 50px;

        &:hover {
            width: 120px;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        width: 44px;
        height: 44px;
        margin-top: 5px;

        &:hover {
            width: 120px;
        }
    }
`;

export const PremiumButton = styled.button`
    width: 66.67px;
    height: 66.67px;
    margin-top: 10px;

    background: ${color('purpl')};
    border-radius: 50px;
    border: 2px solid ${color('white')};

    transition: width 0.5s, border-color 0.3s;

    &:hover {
        width: 150px;
    }

    cursor: pointer;

    ${mediaBreakpointDown('fhd')} {
        width: 50px;
        height: 50px;

        &:hover {
            width: 120px;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        width: 44px;
        height: 44px;
        margin-top: 5px;

        &:hover {
            width: 120px;
        }
    }
`;

export const AnnPremiumButton = styled.button`
    width: 66.67px;
    height: 66.67px;
    margin-top: 10px;

    background: ${color('white')};
    border-radius: 50px;
    border: 2px solid ${color('purpl')};

    transition: width 0.5s, border-color 0.3s;

    &:hover {
        width: 150px;
    }

    cursor: pointer;

    ${mediaBreakpointDown('fhd')} {
        width: 50px;
        height: 50px;

        &:hover {
            width: 120px;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        width: 44px;
        height: 44px;
        margin-top: 5px;

        &:hover {
            width: 120px;
        }
    }
`;

export const PacketCostInnerPremium = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    position: absolute;
    margin-top: 85px;

    color: ${color('white')};

    opacity: 0.6;

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 12px;
    }
`;

export const PacketCostInnerAnnPremium = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    position: absolute;
    margin-top: 85px;

    color: ${color('dark_grey')};

    opacity: 0.6;

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 12px;
    }
`;

export const TitlePacketCost = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;

    letter-spacing: 0.02em;

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
    }
`;

export const TitlePacketCostPremium = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;

    letter-spacing: 0.02em;

    color: ${color('white')};

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
    }
`;

export const TextPacketCostStandart = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;

    color: ${color('black')};

    ul {
        list-style-type: disc;
        color: ${color('purpl')};
        padding-inline-start: 0;
    }

    li {
        margin-bottom: 18px;
        color: ${color('purpl')};
        font-size: 30px;
    }

    li span {
        font-size: 18px;
        color: ${color('black')};
        opacity: 0.5;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
        width: 370px;

        span {
            display: block;
        }

        li {
            color: ${color('purpl')};
            font-size: 25px;
            margin-bottom: 0.3em;
        }

        li span {
            font-size: 15px;
            color: ${color('black')};
            opacity: 0.5;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
        width: 306px;

        span {
            display: block;
        }

        li {
            color: ${color('purpl')};
            font-size: 20px;
            margin-bottom: 0.3em;
        }

        li span {
            font-size: 13px;
            color: ${color('black')};
            opacity: 0.5;
        }
    }
`;

export const TextPacketCostPremium = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;

    color: ${color('white')};

    span {
        font-size: 18px;
        color: ${color('black')};
        opacity: 0.5;
    }

    li {
        margin-bottom: 18px;
        color: ${color('white')};
        font-size: 30px;
    }

    li span {
        font-size: 18px;
        color: ${color('white')};
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
        width: 370px;

        span {
            display: block;
        }

        li {
            color: ${color('white')};
            font-size: 25px;
            margin-bottom: 0.3em;
        }

        li span {
            font-size: 15px;
            color: ${color('white')};
            opacity: 0.5;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
        width: 306px;

        span {
            display: block;
        }

        li {
            color: ${color('white')};
            font-size: 20px;
            margin-bottom: 0.3em;
        }

        li span {
            font-size: 13px;
            color: ${color('white')};
            opacity: 0.5;
        }
    }
`;

export const TextPacketCostAnnPremium = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;

    color: ${color('black')};

    span {
        font-size: 18px;
        color: ${color('black')};
        opacity: 0.5;
    }

    li {
        margin-bottom: 18px;
        color: ${color('purpl')};
        font-size: 30px;
    }

    li span {
        font-size: 18px;
        color: ${color('black')};
        opacity: 0.5;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
        width: 370px;

        span {
            display: block;
        }

        li {
            color: ${color('purpl')};
            font-size: 25px;
            margin-bottom: 0.3em;
        }

        li span {
            font-size: 15px;
            color: ${color('black')};
            opacity: 0.5;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
        width: 306px;

        span {
            display: block;
        }

        li {
            color: ${color('purpl')};
            font-size: 20px;
            margin-bottom: 0.3em;
        }

        li span {
            font-size: 13px;
            color: ${color('black')};
            opacity: 0.5;
        }
    }
`;

export const Point = styled.div`
    width: 9px;
    height: 9px;

    background-color: ${color('purpl')};
    border-radius: 10px;
    margin-top: 45px;

    :first-child {
        margin-top: 7px;
    }

    ${mediaBreakpointDown('fhd')} {
        width: 7px;
        height: 7px;

        margin-top: 33px;
    }
`;

export const PointPremium = styled.div`
    width: 9px;
    height: 9px;

    background-color: ${color('white')};
    border-radius: 10px;
    margin-top: 45px;

    :first-child {
        margin-top: 7px;
    }

    ${mediaBreakpointDown('fhd')} {
        width: 7px;
        height: 7px;

        margin-top: 33px;
    }
`;
