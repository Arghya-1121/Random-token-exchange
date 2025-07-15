import { formatNumber } from "@/utils/number";
import { Flex, Text, Box, useColorModeValue } from "@chakra-ui/react";
import { Coin } from "@cosmjs/proto-signing";
import React, { FC } from "react";

interface ExchangeCardSummaryProps {
    estimatedCost: number;
    rate: number;
    balance: Coin;
    targetSymbol: string;
    cw20_balance: number;
    cw20_decimals: number;
}

const ExchangeCardSummary: FC<ExchangeCardSummaryProps> = (props) => {
    const { estimatedCost, rate, balance, targetSymbol, cw20_balance, cw20_decimals } = props;
    const mainTextColor = useColorModeValue('gray.900', 'white');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
    return (
        <Box borderColor="gray.300" p={4} borderWidth={"1px"} mt={6} data-testid="exchange-card-summary">
            <Flex justify={"space-between"} data-testid="estimated-cost">
                <Text color={secondaryTextColor}>Estimated cost</Text>
                <Text color={mainTextColor} fontWeight={"bold"}>{formatNumber(estimatedCost)} {balance.denom}</Text>
            </Flex>
            <Flex justify={"space-between"} data-testid="exchange-rate">
                <Text color={secondaryTextColor}>Exchange Rate</Text>
                <Text color={mainTextColor}>1 {targetSymbol} = {rate.toLocaleString('en', { useGrouping: true })} {balance.denom}</Text>
            </Flex>
            <Flex justify={"space-between"} data-testid="asset-balance">
                <Text color={secondaryTextColor}>Your Asset Balance</Text>
                <Text color={mainTextColor}>
                    {cw20_balance} {targetSymbol}
                </Text>
            </Flex>
        </Box>
    );
}

export default ExchangeCardSummary;
