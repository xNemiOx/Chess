import React from 'react';
import {
    AnnPremiumButton,
    AnnPremiumCost,
    Container,
    ContainerPagePrice,
    ContainerPagePricePacket,
    ContainerPagePriceTitle,
    ContainerPoint,
    ContainerPriceCost,
    ContainerPriceTextPoint,
    ContainerPriceTitleText,
    ContainerText,
    PacketCostInnerAnnPremium,
    PacketCostInnerPremium,
    PagePriceTitle,
    Point,
    PointPremium,
    PremiumButton,
    PremiumCost,
    PricePacketAnnualPremium,
    PricePacketPremium,
    PricePacketStandart,
    PricePacketTitle,
    PricePacketTitleActive,
    StandartButton,
    StandartCost,
    TextPacketCostAnnPremium,
    TextPacketCostPremium,
    TextPacketCostStandart,
    TitlePacketCost,
    TitlePacketCostPremium
} from './PagePrice.styled';
import ButtonsArrow from '@/icons/Arrow.svg';
import ButtonsArrowBlack from '@/icons/ArrowBlack.svg';

interface PagePriceProps {
    /* Component props */
}

const PagePrice: React.FC<PagePriceProps> = () => {
    // const icons: Record<string, React.ReactNode> = {
    //     youtube: DownloadCircleYouTube,
    //     fb: DownloadCircleFacebook
    // }

    return (
        <Container>
            {
                <ContainerPagePrice>
                    <ContainerPagePriceTitle>
                        <PagePriceTitle>Pricing</PagePriceTitle>
                    </ContainerPagePriceTitle>

                    <ContainerPagePricePacket>
                        <PricePacketStandart>
                            <PricePacketTitle>Standart</PricePacketTitle>
                            <ContainerPriceCost>
                                <StandartCost>Free</StandartCost>
                                <StandartButton>
                                    <ButtonsArrow />
                                </StandartButton>
                            </ContainerPriceCost>

                            <ContainerPriceTitleText>
                                <TitlePacketCost>What is included:</TitlePacketCost>
                            </ContainerPriceTitleText>

                            <ContainerPriceTextPoint>
                                <ContainerText>
                                    <TextPacketCostStandart>
                                        <ul>
                                            <li>
                                                <span>One 40 game analysis report per month</span>
                                            </li>
                                            <li>
                                                <span>Weekly personalized study plan </span>
                                            </li>
                                            <li>
                                                <span>One daily training session (core lessons) </span>
                                            </li>
                                            <li>
                                                <span>One daily warm up</span>
                                            </li>
                                            <li>
                                                <span>Unlimited studies</span>
                                            </li>
                                        </ul>
                                    </TextPacketCostStandart>
                                </ContainerText>
                            </ContainerPriceTextPoint>
                        </PricePacketStandart>

                        <PricePacketPremium>
                            <PricePacketTitleActive>Premium</PricePacketTitleActive>
                            <ContainerPriceCost>
                                <PremiumCost>$7.99</PremiumCost>
                                <PremiumButton>
                                    <ButtonsArrow />
                                </PremiumButton>
                                <PacketCostInnerPremium>Billed monthly, cancel anytime</PacketCostInnerPremium>
                            </ContainerPriceCost>

                            <ContainerPriceTitleText>
                                <TitlePacketCostPremium>What is included:</TitlePacketCostPremium>
                            </ContainerPriceTitleText>

                            <ContainerPriceTextPoint>
                                <ContainerText>
                                    <TextPacketCostPremium>
                                        <li>
                                            <span>Unlimited reports analysis reports on your games</span>
                                        </li>
                                        <li>
                                            <span>Analysis of your last 1000 online games</span>
                                        </li>
                                        <li>
                                            <span>2x deeper analysis</span>
                                        </li>
                                        <li>
                                            <span>Unlimited daily training (core lessons + Premium lessons)</span>
                                        </li>
                                        <li>
                                            <span>My statistics page</span>
                                        </li>
                                        <li>
                                            <span>Share data & lessons with your coach</span>
                                        </li>
                                        <li>
                                            <span>Track multiple accounts across Chess.com/Lichess/Chess24</span>
                                        </li>
                                    </TextPacketCostPremium>
                                </ContainerText>
                            </ContainerPriceTextPoint>
                        </PricePacketPremium>

                        <PricePacketAnnualPremium>
                            <PricePacketTitle>Annual premium</PricePacketTitle>
                            <ContainerPriceCost>
                                <AnnPremiumCost>$4.85</AnnPremiumCost>
                                <AnnPremiumButton>
                                    <ButtonsArrowBlack />
                                </AnnPremiumButton>
                                <PacketCostInnerAnnPremium>Per month/$57.99 annual billing</PacketCostInnerAnnPremium>
                            </ContainerPriceCost>

                            <ContainerPriceTitleText>
                                <TitlePacketCost>What is included:</TitlePacketCost>
                            </ContainerPriceTitleText>

                            <ContainerPriceTextPoint>
                                <ContainerText>
                                    <TextPacketCostAnnPremium>
                                        <li>
                                            <span>Unlimited reports analysis reports on your games</span>
                                        </li>
                                        <li>
                                            <span>Analysis of your last 1000 online games</span>
                                        </li>
                                        <li>
                                            <span>2x deeper analysis</span>
                                        </li>
                                        <li>
                                            <span>Unlimited daily training (core lessons + Premium lessons)</span>
                                        </li>
                                        <li>
                                            <span>My statistics page</span>
                                        </li>
                                        <li>
                                            <span>Share data & lessons with your coach</span>
                                        </li>
                                        <li>
                                            <span>Track multiple accounts across Chess.com/Lichess/Chess24</span>
                                        </li>
                                    </TextPacketCostAnnPremium>
                                </ContainerText>
                            </ContainerPriceTextPoint>
                        </PricePacketAnnualPremium>
                    </ContainerPagePricePacket>
                </ContainerPagePrice>
            }
        </Container>
    );
};

export default PagePrice;
