import React from 'react'
const categories = [
    { value: "", label: "Choose Categories" },
    { value: "413", label: "Lifestyle" },
    { value: "413", label: "Latest" },
    { value: "413", label: "Featured" },
    { value: "413", label: "Tech" },
    { value: "413", label: "Healthy" },
    { value: "413", label: "Fashion" },
    { value: "413", label: "Business" },
    { value: "410", label: "Design" },
    { value: "7", label: "Domain Names" },
    { value: "426", label: "Education" },
    { value: "411", label: "Entertainment" },
    { value: "416", label: "Home & Lifestyle" },
    { value: "425", label: "Marketing" },
    { value: "6", label: "Digital Marketing", indent: true },
    { value: "5", label: "SEO", indent: true },
    { value: "4", label: "Social Media", indent: true },
    { value: "412", label: "Music" },
    { value: "1", label: "Other" },
    { value: "437", label: "Politics" },
    { value: "436", label: "Real Estate" },
    { value: "415", label: "Sports" },
    { value: "414", label: "Technology" },
    { value: "418", label: "Travel" },
    { value: "299", label: "Video" },
    { value: "8", label: "Web Hosting" },
    { value: "9", label: "Web Security" },
    { value: "417", label: "Wellness" },
    { value: "10", label: "Writing" }
  ];
  
  function toSlug(text) {
    return text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
  

const Categories_widget = () => {
  return (
    <>
        <aside id="categories-5" className="widget widget_categories">
                                <h3 className="widget-title penci-border-arrow"><span className="inner-arrow">Categories</span></h3>
                                <ul>
      {categories
        .filter((cat) => cat.value && cat.label !== "Choose Categories")
        .map((cat, index) => {
          const slug = toSlug(cat.label);
          const indentClass = cat.indent ? "ps-4" : ""; // Bootstrap indent using padding-start
          return (
            <li key={index} className={`cat-item cat-item-${cat.value} ${indentClass}`}>
              <a href={`../category/${slug}/index.html`}>
                {cat.label} <span className="category-item-count">(11)</span>
              </a>
            </li>
          );
        })}
    </ul>
                            </aside>
    </>
  )
}

export default Categories_widget
