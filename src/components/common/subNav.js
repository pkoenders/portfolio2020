<section className={projectStyles.sectionProject + ' section-layout-wide'}>
    <div className={projectStyles.prevNext + ' projects-nav'}>
        <div>
            {previous &&
                <Link
                    className={projectStyles.prev}
                    to={`/projects/${previous.frontmatter.slug}`}
                >
                    <IconPrev />
                    <span>Previous</span>

                </Link>
            }
            {next &&
                <Link
                    className={projectStyles.next}
                    to={`/projects/${next.frontmatter.slug}`}
                >
                    <span>Next</span>
                    <IconNext />
                </Link>
            }
        </div>
    </div>
</section>