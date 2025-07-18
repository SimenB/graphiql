import { useOperationsEditorState, type GraphiQLPlugin } from '@graphiql/react';
import type { FC } from 'react';
import GraphiQLCodeExporter, {
  GraphiQLCodeExporterProps,
} from 'graphiql-code-exporter';
import './index.css';

type GraphiQLCodeExporterPluginProps = Omit<GraphiQLCodeExporterProps, 'query'>;

const GraphiQLCodeExporterPlugin: FC<
  GraphiQLCodeExporterPluginProps
> = props => {
  const [operationsString] = useOperationsEditorState();
  return (
    <GraphiQLCodeExporter
      codeMirrorTheme="graphiql"
      {...props}
      query={operationsString}
    />
  );
};

export function codeExporterPlugin(
  props: GraphiQLCodeExporterPluginProps,
): GraphiQLPlugin {
  return {
    title: 'GraphiQL Code Exporter',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
        />
      </svg>
    ),
    content() {
      return <GraphiQLCodeExporterPlugin {...props} />;
    },
  };
}
