import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { toggleProgectStatus } from "../../services/projectService";

export default function useToggleStatus() {
    const queryClient = useQueryClient();

    const { isPending: isUpdating, mutate: toggleProject } = useMutation({
        mutationFn: toggleProgectStatus,
        onSuccess: (data) => {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ["owner-projects"],
            });
        },

        onError: (err) => toast.error(err?.response?.data?.message),
    });

    return { isUpdating, toggleProject };
}