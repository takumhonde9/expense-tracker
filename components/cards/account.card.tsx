import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";
import Text from "../typography/text";
import { colors } from "../../theme/ui";
import PercentageIndicator from "../percentage-indicator";
import { Card } from "../../types/card.type";

const width = Dimensions.get("window").width;

type AccountCardProps = {
  card: Card;
  margin?: boolean;
};

function AccountCard({ card, margin }: AccountCardProps) {
  const cardLogo = {
    visa: require("../../assets/images/visa.png"),
    mastercard: require("../../assets/images/mastercard.png"),
  };

  const logoSizes = {
    visa: { width: 120, height: 50 },
    mastercard: { width: 50, height: 50 },
  };
  return (
    <View style={[styles.accountsContainer, margin ? styles.margin : null]}>
      <View style={styles.card}>
        <View>
          <Text style={styles.subtitle}>{card.name}</Text>
          <Text style={styles.balance}>$ {card.balance.toFixed(2)}</Text>
        </View>
        <PercentageIndicator percentage={card.percentage} />
        <View style={styles.footer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardNumber}>···· ···· {card.lastDigits}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={logoSizes[card.type]} source={cardLogo[card.type]} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance: {
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 14,
  },
  subtitle: {
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 4,
  },
  card: {
    backgroundColor: colors["base-600"],
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
    height: 200,
    elevation: 10,
    shadowColor: "#0d0d0d",
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  accountsContainer: {
    marginTop: 22,
    width: width - 32,
  },
  margin: {
    marginRight: 22,
  },
});

export default AccountCard;
