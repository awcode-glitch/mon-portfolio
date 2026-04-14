import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
};

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        navigate("/admin/login", { replace: true });
        return;
      }

      await loadMessages();
    };

    init();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/admin/login", { replace: true });
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const loadMessages = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("messages")
      .select("id,name,email,subject,message,read,created_at")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      setError("Impossible de charger les messages. Vérifie ta session.");
      return;
    }

    setMessages(data ?? []);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const markAsRead = async (message: Message) => {
    setSavingId(message.id);
    const { error } = await supabase
      .from("messages")
      .update({ read: !message.read })
      .eq("id", message.id);

    setSavingId(null);

    if (error) {
      setError("Impossible de mettre à jour le statut.");
      return;
    }

    await loadMessages();
  };

  const deleteMessage = async (message: Message) => {
    if (!window.confirm("Supprimer définitivement ce message ?")) {
      return;
    }

    setDeletingId(message.id);
    const { error } = await supabase.from("messages").delete().eq("id", message.id);
    setDeletingId(null);

    if (error) {
      setError("Impossible de supprimer ce message.");
      return;
    }

    await loadMessages();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Espace Admin</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Messages reçus</h1>
            <p className="mt-2 text-sm text-slate-600">
              Consulter et marquer comme lu les messages envoyés depuis le formulaire.
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Se déconnecter
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            Chargement des messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            Aucun message pour le moment.
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <article key={message.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{new Date(message.created_at).toLocaleString()}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-900">{message.subject}</h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {message.name} · {message.email}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                      message.read ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {message.read ? "Lu" : "Non lu"}
                  </span>
                </div>

                <p className="mt-6 text-slate-700 whitespace-pre-line">{message.message}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-slate-500">
                    ID : <span className="font-mono text-slate-700">{message.id}</span>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => markAsRead(message)}
                      disabled={savingId === message.id || deletingId === message.id}
                      className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
                    >
                      {savingId === message.id ? "Sauvegarde..." : message.read ? "Marquer comme non lu" : "Marquer comme lu"}
                    </button>
                    <button
                      onClick={() => deleteMessage(message)}
                      disabled={savingId === message.id || deletingId === message.id}
                      className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
                    >
                      {deletingId === message.id ? "Suppression..." : "Supprimer"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
