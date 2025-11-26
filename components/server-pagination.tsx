import { Button } from './ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';

type ServerPaginationProps = {
    currentPage: number;
    totalPages: number;
    baseUrl: string; // e.g., "/blog"
    searchParams: Record<string, string>; // To preserve other filters
};

export function ServerPagination({
    currentPage,
    totalPages,
    baseUrl,
    searchParams,
}: ServerPaginationProps) {
    // Helper to generate the URL for a specific page
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${baseUrl}?${params.toString()}`;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {currentPage > 1 ? (
                        <PaginationPrevious href={createPageURL(currentPage - 1)} />
                    ) : (
                        <Button variant="outline" disabled>Previous</Button>
                    )}
                </PaginationItem>

                {/* We can create a more complex logic to show "..." for many pages */}
                {[ ...Array(totalPages).keys() ].map((page) => (
                    <PaginationItem key={page + 1}>
                        <PaginationLink
                            href={createPageURL(page + 1)}
                            isActive={currentPage === page + 1}
                        >
                            {page + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    {currentPage < totalPages ? (
                        <PaginationNext href={createPageURL(currentPage + 1)} />
                    ) : (
                        <Button variant="outline" disabled>Next</Button>
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}