import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { numberToString } from "../../utils";
import TabItem from "../subcomponents/FloorTabs/TabItem";

const Floor = () => {
  // A Function That Converts Provided Number To Deca String ---------------->
  const first: string = numberToString(1);
  // A Function That Converts Provided Number To Deca String ---------------->

  // Data For Tab ------------------->
  const data = [
    {
      label: first + " Floor",
      value: "first-floor",
      desc: (
        <TabItem
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga
      cupiditate dignissimos, consequatur optio fugiat architecto ut harum
      cum aliquid."
          heading="First Floor"
        />
      ),
    },
  ];
  // Data For Tab ------------------->

  return (
    <Tabs value="first-floor">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab className="poppins" key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            className="bg-slate-100 mt-3 p-0 rounded-md"
            value={value}
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
export default Floor;
