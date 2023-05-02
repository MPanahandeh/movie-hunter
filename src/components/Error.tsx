export default function Error({ errorMessage }: { errorMessage: any }) {
  return (
    <details>
      <summary>Oops something went wrong!</summary>
      {JSON.stringify(errorMessage)}
    </details>
  );
}
