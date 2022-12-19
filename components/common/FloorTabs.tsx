import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { numberToString } from "../../utils";
import TabItem from "../subcomponents/FloorTabs/TabItem";

interface PropTypes {
  floors: {
    floor_heading: string;
    floor_description: string;
    floor_media: string;
  }[];
}

interface floors {
  floor_heading: string;
  floor_description: string;
  floor_media: string;
}

const Floor = ({ floors }: PropTypes) => {
  // A Function That Converts Provided Number To Deca String ---------------->
  const first: string = numberToString(1);
  // A Function That Converts Provided Number To Deca String ---------------->

  const data: any = [];

  // Data For Tab ------------------->

  /**
   * Pushing Each Floor To "data" array variable
   */
  floors.forEach((floor: floors, index: number) => {
    data.push({
      label: numberToString(index + 1) + " Floor",
      value: index + 1 + "-floor",
      desc: (
        <TabItem
          text={floor.floor_description}
          media={floor.floor_media}
          heading={floor.floor_heading}
        />
      ),
    });
  });

  // Data For Tab ------------------->

  return (
    <Tabs value="1-floor">
      <TabsHeader>
        {data.map(({ label, value }: { value: string; label: string }) => (
          <Tab className="poppins" key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }: { value: string; desc: string }) => (
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
