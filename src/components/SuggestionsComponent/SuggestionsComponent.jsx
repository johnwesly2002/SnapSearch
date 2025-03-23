import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./styles.css";
export default function SuggestionsComponent({ query, suggestion }) {
	return (
		<div className="suggestion_container">
			{suggestion?.AbstractText ? (
				<h5 style={{ color: "black" }} key={suggestion?.AbstractText}>
					{suggestion?.AbstractText}
				</h5>
			) : (
				suggestion?.RelatedTopics?.map((topic, index) =>
					topic.Text ? (
						<div className="suggestion" key={index}>
							{topic?.Icon?.URL ? (
								<img
									src={`https://duckduckgo.com${topic?.Icon?.URL}`}
									height={30}
									width={30}
									className="SuggestionImage"
								/>
							) : (
								<div className="SearchIcon">
								<IoIosSearch size={30} color="black" />
								</div>
							)}
							<h5 style={{ color: "black" }} key={index}>
								{topic.Text}
							</h5>
						</div>
					) : null
				)
			)}
		</div>
	);
}
