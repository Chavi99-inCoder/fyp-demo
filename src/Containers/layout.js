import React from "react";
import Footer from "../Components/Common/footer";
import Header from "../Components/Common/header";
import { CssBaseline } from "@material-ui/core";

export default function Layout({ main }) {
	return (
		<div>
			<CssBaseline />
			<Header />
				{main}
			<Footer />
		</div>
	);
}
