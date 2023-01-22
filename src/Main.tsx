import Button from "@twk-ui-lib/react/lib/atoms/Button";
import * as React from "react";
import { ButtonVariant } from "@twk-ui-lib/react/lib/atoms/Button/Type";
import { Container, Header } from "@twk-ui-lib/react";
import {
  ContainerStyleType,
  FlexFlow,
  GapSize,
} from "@twk-ui-lib/react/lib/template/Container/Type";
import { SubMenuPosition } from "@twk-ui-lib/react/lib/molecules/MenuItem/Type";
import { MenuOrientation } from "@twk-ui-lib/react/lib/molecules/Menu/Type";

import FeaturedProduct from "./components/FeaturedProduct";

const Main = () => {
  return (
    <Container type={ContainerStyleType.FLEX} flexFlow={FlexFlow.COLMN}>
      <Header
        headerMenu={{
          menuItems: [
            {
              label: "Electronics",
              leftIcon: "fa-solid fa-house-user",
              parentsList: ["1"],
              submenu: {
                menu: {
                  menuItems: [
                    {
                      label: "Hair Product",
                      leftIcon: "fa-solid fa-earth-americas",
                      parentsList: ["1", "2"],
                      submenu: {
                        menu: {
                          menuItems: [
                            {
                              clickHanlder: function noRefCheck() {},
                              label: "Shampo",
                              leftIcon: "fa-solid fa-earth-americas",
                              parentsList: ["1", "2", "3"],
                              uniqueId: "3",
                            },
                          ],
                        },
                      },
                      uniqueId: "2",
                    },
                    {
                      label: "Hair Products",
                      leftIcon: "fa-solid fa-rectangle-list",
                      parentsList: ["3"],
                      uniqueId: "3",
                    },
                    {
                      label: "Furniture",
                      leftIcon: "fa-solid fa-earth-americas",
                      parentsList: ["4"],
                      uniqueId: "4",
                    },
                    {
                      label: "Automotive",
                      leftIcon: "fa-solid fa-radio",
                      parentsList: ["5"],
                      uniqueId: "5",
                    },
                  ],
                  orientation: MenuOrientation.VERTICAL,
                },
                position: SubMenuPosition.UNDER,
              },
              uniqueId: "1",
            },
            {
              clickHanlder: function noRefCheck() {},
              label: "Art",
              leftIcon: "fa-solid fa-rectangle-list",
              parentsList: ["4"],
              uniqueId: "4",
            },
            {
              label: "Furniture",
              leftIcon: "fa-solid fa-earth-americas",
              parentsList: ["5"],
              submenu: {
                menu: {
                  menuItems: [
                    {
                      label: "Shoes",
                      leftIcon: "fa-solid fa-earth-americas",
                      parentsList: ["5", "6"],
                      submenu: {
                        menu: {
                          menuItems: [
                            {
                              clickHanlder: function noRefCheck() {},
                              label: "Nike",
                              leftIcon: "fa-solid fa-earth-americas",
                              parentsList: ["5", "6", "7"],
                              uniqueId: "7",
                            },
                          ],
                        },
                      },
                      uniqueId: "6",
                    },
                  ],
                },
                position: SubMenuPosition.UNDER,
              },
              uniqueId: "5",
            },
            {
              clickHanlder: function noRefCheck() {},
              label: "Automotive",
              leftIcon: "fa-solid fa-radio",
              parentsList: ["8"],
              uniqueId: "8",
            },
          ],
          orientation: MenuOrientation.HORIZONTAL,
        }}
        navNotification={{
          cart: {
            icon: "fa-solid fa-cart-shopping",
            value: 5,
          },
          like: {
            icon: "fa-regular fa-heart",
            value: 2,
          },
        }}
      />
      <FeaturedProduct />
    </Container>
  );
};

export default Main;
