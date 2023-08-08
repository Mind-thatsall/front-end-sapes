import { render, screen } from "@testing-library/react";
import { CategoriesBox } from "../components/CategoriesBox";
import { MemoryRouter } from 'react-router-dom';
import CategoryCard from "../components/CategoryCard";

describe("Category page", () => {
    it("should fetch data on mount", async () => {
        render(<MemoryRouter><CategoriesBox /></MemoryRouter>)
        const category = await screen.findByText("jackets")
    
        expect(category).toBeInTheDocument;
    });
    
    it("should use the informations given", async () => {
        const picture = 'https://image.url'
        const name = 'pull'
        const slug = '/men/categories/pull'

        const categoryCard = render(
            <MemoryRouter>
            <CategoryCard 
                categorieName={name}
                picture={picture}
                slug={slug}
            /></MemoryRouter>
        )

        const title = await categoryCard.findByText(name)
        expect(title).toHaveTextContent(name);

        const imgAttr = await categoryCard.findByRole('img')
        expect(imgAttr).toHaveAttribute('src', picture)

        const slugAttr = await categoryCard.findByRole('link')
        expect(slugAttr).toHaveAttribute('href', slug)

    })
})

