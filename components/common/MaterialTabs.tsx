import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Date from "./Date";

const MaterialTabs = () => {
  const data = [
    {
      label: "First Floor",
      value: "first_floor",
      desc: <Date date="wdpdpmwdpmwd" />,
    },
    {
      label: "Second Floor",
      value: "second_floor",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Third Floor",
      value: "third_floor",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're 
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs value="first_floor">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab className="poppins" key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
export default MaterialTabs;
