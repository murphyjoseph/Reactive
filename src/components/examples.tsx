import React, { FC } from "react";
import { Text } from '../patterns/text/text';
import { Btn } from "../patterns/btn/btn";
import { Container } from '../patterns/container/container';
import { TColors } from '../types/util-types';
import { Content } from "../patterns/content/content";
import { Accordion } from "../patterns/accordion/accordion";
import { Modal } from "../patterns/modal/modal";
import { Panel } from '../patterns/panel/panel';

export const Examples: FC = () => {

  const [statefulColor, setColor] = React.useState<TColors>("black")
  const [statefulText, setText] = React.useState<string>("default text")

  const statefulChange = () => {
    setColor("grey")
    setText("Color is Grey")
  }

  // VIEW

  return (
    <main>
      <Container passedBindings={({
        margin: {size: "size1", direction: "all"},
        padding: [
          {
            size: "size2",
            direction: "all",
            breakpointName: "breakpoint2",
            breakpointDirection: "over"
          },
          {
            size: "size8",
            direction: "all",
            breakpointName: "breakpoint4",
            breakpointDirection: "over"
          }
        ],
        maxWidth: [
          {
            size: "size1",
            breakpointDirection: "over",
            breakpointName: "breakpoint2"
          },
          {
            size: "size4",
            breakpointDirection: "over",
            breakpointName: "breakpoint6"
          }
        ]
      })}>
        <Accordion passedBindings={({
          contentBar: {
            slot: <Text passedBindings={({text: "Content Bar for Accordion", preset: "headingtwo"})} />
          },
          contentArea: {
            slot: <Text passedBindings={({text: "Content Area for Accordion"})} />
          } })}
        />

        <Modal passedBindings={({
          trigger: {
            slot: <Btn passedBindings={({ text: "Open A Modal", brand: "secondary", display: "block"})} />
          },
          contentBar: {
            slot: <Text passedBindings={({text: "Content Area for Modal"})} />
          },
          contentArea: {
            slot: <Text passedBindings={({text: "Content Area for Modal. Click outside of modal to close."})} />
          }
        })} />

        <Panel passedBindings={({
          isPortal: true,
          size: "size6",
          location: "right",
          trigger: {
            slot: <Btn passedBindings={({ text: "Open A Right Panel", brand: "success", display: "block"})} />
          },
          contentBar: {
            slot: <Text passedBindings={({text: "Content Area for Right Panel"})} />
          },
          contentArea: {
            slot: <Text passedBindings={({text: "Content Area for Right Panel. Click outside of right panel to close."})} />
          }
        })} />
      </Container>

      <Container passedBindings={({
        colorBackground: "global",
        margin: {size: "size1", direction: "all"},
        padding: [
          {
            size: "size2",
            direction: "all",
            breakpointName: "breakpoint2",
            breakpointDirection: "over"
          },
          {
            size: "size8",
            direction: "all",
            breakpointName: "breakpoint4",
            breakpointDirection: "over"
          }
        ],
        maxWidth: [
          {
            size: "size1",
            breakpointDirection: "over",
            breakpointName: "breakpoint2"
          },
          {
            size: "size4",
            breakpointDirection: "over",
            breakpointName: "breakpoint6"
          }
        ]
      })}>

        <Content passedBindings={({
          textBindings: [
            {
              text: statefulText,
              kind: "h1",
              isBig: true,
              colorText: statefulColor,
              textAlignment: "right"
            },
            {
              text: statefulText,
              kind: "h1",
              isBig: true,
              colorText: statefulColor,
              textAlignment: "right"
            }],
          btnBindings: [
            {
              text: "Link to Google",
              brand: "warning",
              display: "block",
              href: "https://www.google.com"
            }]
        })} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Text passedBindings={({ text: statefulText, kind: "h1", isBig: true, colorText: statefulColor, textAlignment: "right"})} />
        <Btn passedBindings={({ text: "Change Text Color", brand: "primary", display: "block", onClick: statefulChange })}/>

      </Container>
    </main>
  );
}
