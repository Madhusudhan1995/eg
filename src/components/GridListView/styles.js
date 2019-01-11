import {dpToPx} from "../../helpers";

export const renderStyles = (viewStyle, imageHeight = 120) => {
  return {
      container: {
        flex: 1,
        backgroundColor: "#fafafa"
      },

      buttonContainer: {
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#ffffff",
          borderTopColor: "#dddddd",
          borderTopWidth: 1,
          borderBottomColor: "#dddddd",
          borderBottomWidth: 1,
          paddingVertical: dpToPx(4)
      },

      gridContContainer: {
        paddingTop: dpToPx(6)
      },

      gridContainer: {
          width: "100%",
          flexDirection: viewStyle === "gridView" ? "column" : "row",
          paddingLeft: dpToPx(3),
          paddingRight: dpToPx(3)
      },

      gridItemContainer: {
          width: viewStyle === "gridView" ? "100%" : "50%",
          flexDirection: viewStyle === "gridView" ? "row" : "column",
          paddingLeft: dpToPx(3),
          paddingRight: dpToPx(3),
          paddingBottom: dpToPx(6)
      },

      gridItemContent: {
          padding: dpToPx(4),
          backgroundColor: "#ffffff",
          width: viewStyle === "gridView" ? "50%" : "100%",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: viewStyle === "gridView" ? 0 : 8,
          borderTopLeftRadius: viewStyle === "gridView" ? 8 : 0,
          borderWidth: 1,
          borderColor: "#efefef"
      },

      gridImageContainer: {
          width: viewStyle === "gridView" ? "50%" : "100%"
      },

      gridImageStyle: {
        borderTopLeftRadius: viewStyle === "gridView" ? 0 : 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: viewStyle === "gridView" ? 8 : 0,
        width: "100%",
        height: viewStyle === "gridView" ? imageHeight : dpToPx(50) ,
        borderWidth: 1,
        borderColor: "#efefef"
      },

      listViewButton: {
        width: "50%",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: "#dddddd",
        flexDirection: "row"
      },

      gridViewButton: {
        width: "50%",
        justifyContent: "center",
        flexDirection: "row"
      },
  }
}

export const styles = {
    vouchersStoreName: {
        fontSize: dpToPx(5),
        fontWeight: "700",
        color: "#808080",
        paddingBottom: dpToPx(2)
    },
    vouchersOfferPrice: {
        fontSize: dpToPx(9),
        fontWeight: "500",
        color: "#333333",
        paddingBottom: dpToPx(2)
    },
    vouchersOfferText: {
        fontSize: dpToPx(7),
        color: "#808080",
        lineHeight: dpToPx(9),
        paddingBottom: dpToPx(3)
    },
    vouchersValidText: {
      fontSize: dpToPx(4),
      color: "#333333",
    },
    offerPriceText: {
      color: "#0f71b8"
    }
}
