import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ConfigurationFormProps {
  onAddConfiguration: (formData: Configuration) => void;
}

interface Configuration {
  knowledgeBaseName: string;
  description: string;
  pattern: string;
  embeddings: string;
  chunking: string;
  metrics: string;
  vectorDB: string;
}

const validationSchema = Yup.object().shape({
  knowledgeBaseName: Yup.string().required("Knowledge Base Name is required"),
  description: Yup.string().required("Description is required"),
  pattern: Yup.string().required("Pattern is required"),
  embeddings: Yup.string().required("Embeddings size is required"),
  chunking: Yup.string().required("Chunking method is required"),
  metrics: Yup.string().required("Metric is required"),
  vectorDB: Yup.string().required("Vector DB is required"),
});

export default function ConfigurationForm({ onAddConfiguration }: ConfigurationFormProps) {
  return (
    <Formik
      initialValues={{
        knowledgeBaseName: "",
        description: "",
        pattern: "",
        embeddings: "",
        chunking: "",
        metrics: "",
        vectorDB: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddConfiguration(values);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className="p-4 grid grid-cols-1 gap-4 border shadow-xl rounded-md border-gray-300">
          <div>
            <label className="block font-medium text-black">Knowledge Base Name</label>
            <Field
              name="knowledgeBaseName"
              className="w-full border p-2 rounded text-black placeholder:text-gray-400"
              placeholder="Enter Knowledge Base Name"
            />
            <ErrorMessage name="knowledgeBaseName" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block font-medium text-black">Description</label>
            <Field
              name="description"
              as="textarea"
              className="w-full border p-2 rounded text-black placeholder:text-gray-400"
              placeholder="Enter Description"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-black">Pattern</label>
              <Field as="select" name="pattern" className="w-full border p-2 rounded text-black">
                <option value="" disabled>Select Pattern</option>
                <option value="Contextual RAG">Contextual RAG</option>
                <option value="Agentic RAG">Agentic RAG</option>
                <option value="Hybrid RAG">Hybrid RAG</option>
                <option value="Graph RAG">Graph RAG</option>
                <option value="Self-reflective RAG">Self-reflective RAG</option>
              </Field>
              <ErrorMessage name="pattern" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium text-black">Embeddings</label>
              <Field as="select" name="embeddings" className="w-full border p-2 rounded text-black">
                <option value="" disabled>Select Embedding Size</option>
                <option value="256">256</option>
                <option value="512">512</option>
                <option value="768">768</option>
                <option value="1024">1024</option>
                <option value="Custom">Custom</option>
              </Field>
              <ErrorMessage name="embeddings" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-black">Chunking</label>
              <Field as="select" name="chunking" className="w-full border p-2 rounded text-black">
                <option value="" disabled>Select Chunking Method</option>
                <option value="Fixed sized">Fixed Sized</option>
                <option value="Dynamic">Dynamic</option>
                <option value="Overlapping">Overlapping</option>
              </Field>
              <ErrorMessage name="chunking" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium text-black">Metrics</label>
              <Field as="select" name="metrics" className="w-full border p-2 rounded text-black">
                <option value="" disabled>Select Metric</option>
                <option value="Dot">Dot</option>
                <option value="Cosine">Cosine</option>
                <option value="Euclidean">Euclidean</option>
              </Field>
              <ErrorMessage name="metrics" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          <div>
            <label className="block font-medium text-black">Vector DB</label>
            <Field
              name="vectorDB"
              className="w-full border p-2 rounded text-black placeholder:text-gray-400"
              placeholder="Enter Vector DB (e.g., Pinecone, FAISS)"
            />
            <ErrorMessage name="vectorDB" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mt-4">
            <button type="submit" className="px-4 py-2 rounded border border-[#3d7069] text-[#3d7069]">
              Add Configuration
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
