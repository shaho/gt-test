import CheckListFilter from "../check-list-filter";

function TagsComponent({
  list = [],
  loading = false,
  failure = false,
  error_message = "",
  selected = [],
  handler,
}) {
  const handle = (item) => {
    handler(item);
  };

  return (
    <CheckListFilter
      list={list}
      loading={loading}
      failure={failure}
      error_message={error_message}
      selected={selected}
      handler={handle}
      title="Tags"
    />
  );
}

export default TagsComponent;
