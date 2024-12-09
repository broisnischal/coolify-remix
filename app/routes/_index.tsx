import { Link } from "@remix-run/react";
import type {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "partymix";
import WhosHere from "../components/whos-here";

declare const PARTYKIT_HOST: string;

export const meta: MetaFunction = () => {
  return [
    { title: "Cool Demo" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async function ({
  context,
}: LoaderFunctionArgs) {
  // You can use context.lobby to read vars, communicate with parties,
  // read from ai models or the vector db, and more.
  //
  // See https://docs.partykit.io/reference/partyserver-api/#partyfetchlobby
  // for more info.
  return Response.json({ partykitHost: PARTYKIT_HOST });
};

// Add sample data - you can replace this with real data from your loader
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        Example of remix & PartyKit
        <WhosHere />
        <Link target="_blank" to="https://console.broisnees.tech">
          Open Console
        </Link>


      </div>
    </div>
  );
}
