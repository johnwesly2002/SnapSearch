import React from "react";
import "./styles.css";
export default function SuggestionsComponent({ query, suggestion }) {
	console.log(query);
	console.log(suggestion);
	return (
		<div className="suggestion_container">
			{suggestion?.AbstractText ? (
				<h5 style={{color: 'black'}}>{suggestion?.AbstractText}</h5>
			) : (
				suggestion?.RelatedTopics?.map((topic, index) => (
					<h5 style={{ color: "black" }} key={index}>
						{topic.Text}
					</h5>
				))
			)}
		</div>
	);
}
