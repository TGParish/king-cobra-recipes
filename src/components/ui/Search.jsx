import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: [
		"frontmatter.title",
		"frontmatter.description",
		"frontmatter.tags",
		"frontmatter.ingredients",
	],
	includeMatches: true,
	minMatchCharLength: 3,
	threshold: 0.5,
};

function Search({ searchList }) {
	// User's input
	const [query, setQuery] = useState("");

	const fuse = new Fuse(searchList, options);

	// Set a limit to the recipes: 5
	const recipes = fuse.search(query).map((result) => result.item);

	function handleOnSearch({ target = {} }) {
		const { value } = target;
		setQuery(value);
	}

	return (
		<>
			<label htmlFor="Search"></label>
			<input
				type="search"
				value={query}
				onChange={handleOnSearch}
				id="search-all-recipes"
				placeholder="Search Cobra's Cookbook"
				className="w-full p-2 bg-[#222] text-[#9ba2ae] appearance-none"
			/>
			{query.length > 1 && (
				<p>
					Found {recipes.length} {recipes.length === 1 ? "result" : "results"}{" "}
					for '{query}'
				</p>
			)}
			<ol>
				{recipes &&
					recipes.map((recipe) => (
						<li key={recipe.url}>
							<a tabIndex="0" href={recipe.url}>
								{recipe.frontmatter.title}
							</a>
						</li>
					))}
			</ol>
		</>
	);
}

export default Search;
